class Api::SearchController < ApplicationController
  def index
    @keywords = keywords = CGI.parse(params[:keywords])["?keywords"].first
    keywords = @keywords.downcase.split(/[\s-](?!\d)/).select { |kw| kw != "" }
    keywords.map! { |kw| strip_keyword(kw) }

    queries, query = [], []

    keywords.each do |keyword|
      if could_be_plural?(keyword)
        queries << "{#{keyword}}"
        queries << "{#{keyword.slice(0, keyword.length-1)}}"
        query << "(search_keywords @> ? OR search_keywords @> ?)"
      else
        queries << "{#{keyword}}"
        query << "search_keywords @> ?"
      end
    end
    query = query.join(" AND ")
    @results = Product.where(query, *queries).order(:id)
    render "api/search/index"
  end

  private
  def could_be_plural?(word)
    if word[-1] == 's' && word.length > 1 && word.slice(-2..-1) != "'s"
      return true
    end
    false
  end

  def strip_keyword(keyword)
    # replace + signs with 'plus' string
    keyword = keyword.gsub(/\+/, 'plus')
  end
end
