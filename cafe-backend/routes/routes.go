package routes

import (
	"cafe-app/cafe-backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/cafes", controllers.GetCafes)
	r.POST("/cafes", controllers.CreateCafe)
}
