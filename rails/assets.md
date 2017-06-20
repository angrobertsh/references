Put assets in the appropriate folder (images, whatever).

Access in CSS with

background-image: image-url("filename.png");


For urls, can pass in object

redirect_to unit_url(@unit)

can pass in params as ordered in url

redirect_to edit_unit_inquiry_url(@unit.id, @inquiry.id)

or as named in rake routes

<%= button_to "Cancel This Inquiry", unit_inquiry_url(@inquiry.unit_id, @inquiry.id), method: :delete %>
