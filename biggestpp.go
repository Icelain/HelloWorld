package main

import (
	"fmt"
	"strings"
	"os/exec"
)

func main() {
	// Check out all the source files
	output, err := exec.Command("node","evenbiggerpp.js").Output()

	if err != nil{
		fmt.Errorf("Frick you this was supposed to work")
	}
	
	fmt.Println(strings.Trim(string(output),"\n"))

}
