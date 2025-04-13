package models

type Cafe struct {
	ID        uint `gorm:"primaryKey"`
	Name      string
	Address   string
	Latitude  float64
	Longitude float64
	Reviews   []Review `gorm:"foreignKey:CafeID"`
}
