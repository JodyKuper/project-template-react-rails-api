class TheTableSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id
end
