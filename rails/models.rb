# Validating booleans

validates :active, inclusion: { in: [ true, false ] }

# Validating overlaps

validate :overlapping_inquiries

def self.overlapping(inquiry)
  if inquiry.id.nil?
    self.where("(start_date, end_date) OVERLAPS (?, ?)", inquiry.start_date, inquiry.end_date)
      .where("unit_id = ?", inquiry.unit_id)
  else
    self.where("(start_date, end_date) OVERLAPS (?, ?)", inquiry.start_date, inquiry.end_date)
      .where("unit_id = ?", inquiry.unit_id)
      .where("id != ?", inquiry.id)
  end
end

# for reference, this is the same as
# scope :overlapping, ->(inquiry) {
  # where("(start_date, end_date) OVERLAPS (?, ?)", inquiry.start_date, inquiry.end_date)
  # .where(unit_id: booking.unit_id)
  # .where("id != ?", inquiry.id)
# }

def overlapping?
  self.class.overlapping(self).count > 0
end

protected

def overlapping_inquiries
  if overlapping?
    errors[:time] << "slot is already filled"
  end
end
