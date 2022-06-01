class Promotion < ApplicationRecord
    has_many :fighters
    has_many :weightclasses, through: :fighters 
end
