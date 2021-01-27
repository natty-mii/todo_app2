class Todo < ApplicationRecord
  belongs_to :calender
  validates :sentence, presence: true
end
