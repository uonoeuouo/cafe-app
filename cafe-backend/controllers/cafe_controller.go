package controllers

import (
	"cafe-app/cafe-backend/config"
	"cafe-app/cafe-backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCafes(c *gin.Context) {
	var cafes []models.Cafe
	config.DB.Find(&cafes)
	c.JSON(http.StatusOK, cafes)
}

func CreateCafe(c *gin.Context) {
	var cafe models.Cafe
	if err := c.ShouldBindJSON(&cafe); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	config.DB.Create(&cafe)
	c.JSON(http.StatusOK, cafe)
}
