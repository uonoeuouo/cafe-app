package main

import (
	"cafe-app/config"
	"cafe-app/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	config.ConnectDB()
	routes.SetupRoutes(r)

	r.Run(":8080") // ローカルホスト:8080で起動
}
