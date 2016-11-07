class Category < ActiveRecord::Base
  validates :name, uniqueness: true

  def self.get_category_id(category_name)
    category = Category.find_by_name(category_name)
    if category
      return category.id
    end
  end
end
