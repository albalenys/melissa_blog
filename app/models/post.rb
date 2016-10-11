class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :admin
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
end