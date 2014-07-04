require 'em-websocket'
require "json"

sockets = []

EventMachine::WebSocket.start(:host => "192.168.250.237", :port => 8080) do |ws|

  ws.onmessage do |msg|
    puts "Received: #{msg}"
    begin
      json = JSON.parse(msg)
      if json.key?("login") && json.key?("message")
        sockets.each { |s| s.send(json.to_json) }
      else
        ws.send("Wrong format, expected {login: '...', message: '...'}, received: #{msg}")
      end
    rescue JSON::ParserError => e
      ws.send("Error while parsing JSON. Received: #{msg}")
    end
  end

  ws.onclose do
    sockets.delete(ws)
    puts("WebSocket closed")
  end

  ws.onopen do
    sockets << ws
    puts "Client connected"
    # ws.send({msg: "Hello Client!"}.to_json)
    ws.send("Hello Client!")
  end

end
