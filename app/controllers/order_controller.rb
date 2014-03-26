class OrderController < ApplicationController
 skip_before_action :verify_authenticity_token
  def cart
  end

  def payment
  end

  def info
  end
end
