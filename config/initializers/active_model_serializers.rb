require 'active_model_serializers'

# set the adapter type
ActiveModel::Serializer.config.adapter = :json_api
# set the key_transform to :unaltered since you will adjust the attributes in the
# Ember serializer to use underscores instead of dashes
ActiveModelSerializers.config.key_transform = :unaltered
# In order to properly handle JSON API responses, we need to register a JSON API renderer
ActiveSupport.on_load(:action_controller) do
  require 'active_model_serializers/register_jsonapi_renderer'
end
