package config

import (
	"cafe-app/cafe-backend/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	database, err := gorm.Open(sqlite.Open("cafe.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}
	DB = database

	// 自動マイグレーション
	database.AutoMigrate(&models.User{}, &models.Cafe{}, &models.Review{})
}
