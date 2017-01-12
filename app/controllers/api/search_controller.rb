require 'set'

class Api::SearchController < ApplicationController
  def index
    keywords = CGI.parse(params[:keywords])["keywords"].first.split(" ")
    keywords.map! { |kw| stripKeyword(kw) }
    queries = keywords.map { |keyword| "%#{keyword}%" }
    query = queries.map { "search_keywords ILIKE ?" }.join(" AND ")
    @results = Product.where(query, *queries).order(:id)
    render "api/search/index"
  end

  private
  def stripKeyword(keyword)
    keyword = keyword.gsub(/\+/, 'plus')
    keyword = keyword.gsub(/^\(+|\)+$/, '')
  end
end
