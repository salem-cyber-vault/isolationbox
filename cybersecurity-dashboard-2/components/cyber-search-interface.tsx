"use client"

import { useState } from "react"
import { Search, Filter, Globe, Database, Server, Monitor, ExternalLink, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

const realSearchSuggestions = [
  {
    query: "yandex.ru",
    description: "Russia's biggest search engine - like Google but Russian!",
    icon: Server,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=yandex.ru",
    yandexLink: "https://yandex.ru",
    explanation:
      "Yandex is Russia's most popular search engine, email service, and tech company. It's completely safe to explore!",
  },
  {
    query: "cutestat.com",
    description: "Website popularity checker - see how famous websites are!",
    icon: Database,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=cutestat.com",
    yandexLink: "https://yandex.ru/search/?text=cutestat.com",
    explanation:
      "CuteStat shows you website statistics like visitor counts and popularity rankings. Great for beginners!",
  },
  {
    query: "mail.ru",
    description: "Russian email service - millions of people use it daily",
    icon: Server,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=mail.ru",
    yandexLink: "https://yandex.ru/search/?text=mail.ru",
    explanation: "Mail.ru is Russia's popular email service, like Gmail but Russian. Completely legitimate and safe.",
  },
  {
    query: "vk.com",
    description: "Russian social network - like Facebook for Russian speakers",
    icon: Globe,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=vk.com",
    yandexLink: "https://yandex.ru/search/?text=vk.com",
    explanation:
      "VKontakte (VK) is Russia's biggest social network where people share photos, chat, and connect with friends.",
  },
  {
    query: "rambler.ru",
    description: "Russian web portal with news, email, and search",
    icon: Monitor,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=rambler.ru",
    yandexLink: "https://yandex.ru/search/?text=rambler.ru",
    explanation: "Rambler is an old Russian internet portal that provides news, email, and search services.",
  },
  {
    query: "ok.ru",
    description: "Odnoklassniki - Russian social network for classmates",
    icon: Globe,
    count: "Real",
    externalLink: "https://www.shodan.io/search?query=ok.ru",
    yandexLink: "https://yandex.ru/search/?text=ok.ru",
    explanation:
      "Odnoklassniki helps Russians reconnect with old school friends and classmates. Very popular in Russia!",
  },
]

const realSecurityDorks = [
  {
    name: "Russian Government Sites",
    query: 'country:RU org:"Government"',
    risk: "Educational",
    externalLink: "https://www.shodan.io/search?query=country%3ARU+org%3A%22Government%22",
    explanation:
      "Find official Russian government websites. Good for learning about different countries' digital infrastructure.",
  },
  {
    name: "Russian Universities",
    query: 'country:RU org:"University"',
    risk: "Safe",
    externalLink: "https://www.shodan.io/search?query=country%3ARU+org%3A%22University%22",
    explanation:
      "Discover Russian educational institutions online. Universities often have interesting research and resources.",
  },
  {
    name: "Moscow Web Servers",
    query: 'city:"Moscow" port:80',
    risk: "Educational",
    externalLink: "https://www.shodan.io/search?query=city%3A%22Moscow%22+port%3A80",
    explanation: "See web servers located in Moscow, Russia's capital. Learn about the city's digital infrastructure.",
  },
  {
    name: "Russian Email Servers",
    query: "country:RU port:25",
    risk: "Educational",
    externalLink: "https://www.shodan.io/search?query=country%3ARU+port%3A25",
    explanation: "Find email servers in Russia. Port 25 is used for sending emails between servers.",
  },
  {
    name: "St. Petersburg Devices",
    query: 'city:"Saint Petersburg" port:443',
    risk: "Educational",
    externalLink: "https://www.shodan.io/search?query=city%3A%22Saint+Petersburg%22+port%3A443",
    explanation: "Discover secure websites (HTTPS) in Russia's cultural capital, St. Petersburg.",
  },
  {
    name: "Russian DNS Servers",
    query: "country:RU port:53",
    risk: "Educational",
    externalLink: "https://www.shodan.io/search?query=country%3ARU+port%3A53",
    explanation: "Find DNS servers in Russia. These help translate website names into IP addresses.",
  },
]

const countries = [
  "Russia",
  "United States",
  "China",
  "Germany",
  "United Kingdom",
  "Japan",
  "France",
  "Canada",
  "Australia",
  "Netherlands",
]

const deviceTypes = [
  "Web Server",
  "Email Server",
  "DNS Server",
  "Database",
  "Router",
  "Webcam",
  "IoT Device",
  "VPN",
  "Firewall",
  "Load Balancer",
]

export function CyberSearchInterface() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedDeviceType, setSelectedDeviceType] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
  }

  const handleSuggestionClick = (query: string, externalLink?: string, yandexLink?: string) => {
    setSearchQuery(query)
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="space-y-6">
      {/* Beginner Welcome */}
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertDescription>
          <strong>🔰 Welcome, Cyber Explorer!</strong> This tool helps you discover real websites and devices on the
          internet safely. We use <strong>real Russian sources</strong> like Yandex.ru and CuteStat.com, plus explain
          everything in simple terms! 🇷🇺
        </AlertDescription>
      </Alert>

      {/* Main Search Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-orange-500" />🌍 Real Internet Device Discovery
          </CardTitle>
          <CardDescription>
            Search and explore real websites, servers, and devices around the world using authentic Russian and
            international sources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Try: yandex.ru, cutestat.com, or any website you're curious about..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className="bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4 mr-2" />🔍 Explore
            </Button>
            <Button variant="outline" onClick={() => setShowAdvanced(!showAdvanced)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="grid gap-4 md:grid-cols-3 p-4 border rounded-lg bg-muted/20">
              <div className="space-y-2">
                <Label>🌍 Country</Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country.toLowerCase()}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>🖥️ Device Type</Label>
                <Select value={selectedDeviceType} onValueChange={setSelectedDeviceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select device type" />
                  </SelectTrigger>
                  <SelectContent>
                    {deviceTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>🔌 Port Range</Label>
                <Input placeholder="e.g., 80,443,8080-8090" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Real Russian Sources and Educational Searches */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Real Russian Websites */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">🇷🇺 Real Russian Websites</CardTitle>
            <CardDescription>Explore authentic Russian websites and services that millions use daily</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realSearchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors group"
                  onClick={() =>
                    handleSuggestionClick(suggestion.query, suggestion.externalLink, suggestion.yandexLink)
                  }
                >
                  <div className="flex items-center gap-3">
                    <suggestion.icon className="h-4 w-4 text-orange-500" />
                    <div>
                      <p className="font-medium text-sm">{suggestion.query}</p>
                      <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                      <p className="text-xs text-blue-600 mt-1">💡 {suggestion.explanation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {suggestion.count}
                    </Badge>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Educational Security Searches */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">🎓 Educational Cyber Searches</CardTitle>
            <CardDescription>
              Learn cybersecurity with safe, educational searches of Russian infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realSecurityDorks.map((dork, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors group"
                  onClick={() => handleSuggestionClick(dork.query, dork.externalLink)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{dork.name}</p>
                      <Badge variant="outline" className="border-blue-500 text-blue-500">
                        {dork.risk}
                      </Badge>
                    </div>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{dork.query}</code>
                    <p className="text-xs text-green-600 mt-1">🎯 {dork.explanation}</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-blue-500 ml-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">📊 Live Internet Statistics</CardTitle>
          <CardDescription>Real data from global internet scanning and Russian web analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div
              className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.open("https://yandex.ru", "_blank")}
            >
              <div className="text-2xl font-bold text-orange-500">150M+</div>
              <div className="text-sm text-muted-foreground">Yandex Daily Users</div>
              <div className="text-xs text-blue-600 mt-1">🇷🇺 Click to visit Yandex</div>
            </div>
            <div
              className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.open("https://cutestat.com", "_blank")}
            >
              <div className="text-2xl font-bold text-green-500">2M+</div>
              <div className="text-sm text-muted-foreground">Websites Analyzed</div>
              <div className="text-xs text-blue-600 mt-1">📊 Click to visit CuteStat</div>
            </div>
            <div
              className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.open("https://www.shodan.io", "_blank")}
            >
              <div className="text-2xl font-bold text-blue-500">500M+</div>
              <div className="text-sm text-muted-foreground">Devices on Shodan</div>
              <div className="text-xs text-blue-600 mt-1">🔍 Click to visit Shodan</div>
            </div>
            <div
              className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.open("https://2ip.ru", "_blank")}
            >
              <div className="text-2xl font-bold text-purple-500">1B+</div>
              <div className="text-sm text-muted-foreground">IP Lookups Daily</div>
              <div className="text-xs text-blue-600 mt-1">🇷🇺 Click to visit 2ip.ru</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Educational Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">📚 Learn More About Cybersecurity</CardTitle>
          <CardDescription>
            Beginner-friendly resources to understand internet security and digital exploration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Button
              variant="outline"
              className="justify-start h-auto p-4 bg-transparent hover:bg-blue-50"
              onClick={() => window.open("https://yandex.ru/search/?text=what+is+cybersecurity", "_blank")}
            >
              <div className="text-left">
                <div className="font-medium">🔰 Cybersecurity Basics</div>
                <div className="text-xs text-muted-foreground">Learn the fundamentals on Yandex</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto p-4 bg-transparent hover:bg-green-50"
              onClick={() => window.open("https://cutestat.com", "_blank")}
            >
              <div className="text-left">
                <div className="font-medium">📊 Website Analysis</div>
                <div className="text-xs text-muted-foreground">Understand web statistics with CuteStat</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto p-4 bg-transparent hover:bg-red-50"
              onClick={() => window.open("https://www.shodan.io/explore", "_blank")}
            >
              <div className="text-left">
                <div className="font-medium">🌐 Internet Exploration</div>
                <div className="text-xs text-muted-foreground">Discover devices safely with Shodan</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto p-4 bg-transparent hover:bg-purple-50"
              onClick={() => window.open("https://2ip.ru", "_blank")}
            >
              <div className="text-left">
                <div className="font-medium">🇷🇺 Russian IP Tools</div>
                <div className="text-xs text-muted-foreground">Learn about networks with 2ip.ru</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
