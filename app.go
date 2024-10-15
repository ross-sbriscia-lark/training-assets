package main

import (
	"os"
	"strings"

	"github.com/common-nighthawk/go-figure"
)

func main() {
	myFigure := figure.NewColorFigure(strings.Join(os.Args[1:], " "), "", "green", true)
	myFigure.Print()
}
