# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
require 'problem_child'
ProblemChild.views_dir = 'app/views'
ProblemChild.public_dir = Rails.public_path
run ProblemChild::App
