class ApplicationController < ActionController::API
  # Tell the controller that you accept and generate JSONAPI data.
  # To do that, use respond_to in the controller handlers to tell rails
  # you are consuming and returning jsonapi format data.
  # Without this, Rails will refuse to parse the request body into params.
  include ActionController::MimeResponds
end
