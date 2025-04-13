package models

type Review struct {
	ID           uint `gorm:"primaryKey"`
	UserID       uint
	CafeID       uint
	Wifi         bool
	Outlet       bool
	Atmosphere   int // 1〜5
	CustomerType int // 1〜5
	Comment      string
}
