# encoding: UTF-8
require 'spec_helper'
require_relative 'actionwords'

describe 'ToDo\'s' do
  include Actionwords

  it "ToDo's Sanity Test" do
    # Given a user on the todo list
    a_user_on_the_todo_list
  end
end
