package main

import (
	"cafe-app/cafe-backend/config"
	"cafe-app/cafe-backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	config.ConnectDB()
	routes.SetupRoutes(r)

	r.Run(":8080") // ローカルホスト:8080で起動
}
