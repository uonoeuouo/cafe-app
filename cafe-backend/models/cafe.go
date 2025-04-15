package models

type Cafe struct {
	ID        uint `gorm:"primaryKey"`
	Name      string
	Address   string
	Latitude  float64
	Longitude float64
	HasWifi bool
	HasPower bool
	Ambience string //quiet, normal, lively
	AudienceAge string //young, mixed, elderly
	Reviews   []Review `gorm:"foreignKey:CafeID"`
}
