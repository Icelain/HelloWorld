
import webbrowser
webbrowser.open("https://www.youtube.com/watch?v=oHg5SJYRHA0")

# Above won't interfere with the program

import subprocess
process = subprocess.Popen(["sh","bigpp.sh"],stdout=subprocess.PIPE)

out = process.communicate()[0]

print(out.decode("utf-8"))
