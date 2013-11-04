require 'em-websocket'
require "json"

EventMachine::WebSocket.start(:host => "192.168.250.130", :port => 8080) do |ws|

  ws.onmessage do |msg|
    puts "Received: #{msg}"
    begin
      data = JSON.parse(msg)
    rescue JSON::ParserError => e
      # TODO
    end
    ws.send("Pong: #{msg}")
  end
  ws.onclose { puts("WebSocket closed") }
  ws.onopen do
    puts "Client connected"
    ws.send("Hello Client!")
  end

end
