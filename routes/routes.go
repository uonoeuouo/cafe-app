package routes

import (
	"cafe-app/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/cafes", controllers.GetCafes)
	r.POST("/cafes", controllers.CreateCafe)
}
