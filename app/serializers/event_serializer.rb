class EventSerializer < ActiveModel::Serializer
  attributes :id, :date, :description
  has_one :user
end
