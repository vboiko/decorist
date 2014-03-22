json.array!(@products) do |product|
  json.extract! product, :id, :title, :image_url, :price
  json.url product_url(product, format: :json)
end
