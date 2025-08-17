"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ExternalLink,
  MapPin,
  Shield,
  AlertTriangle,
  Server,
  Database,
  Camera,
  Router,
  Monitor,
  Download,
  Eye,
  Copy,
  Globe,
  Lock,
  Unlock,
  Activity,
  Network,
  Info,
  BookOpen,
  Lightbulb,
} from "lucide-react"

const realResults = [
  {
    id: 1,
    ip: "77.88.55.242",
    hostname: "yandex.ru",
    country: "Russia",
    city: "Moscow",
    org: "Yandex LLC",
    ports: [80, 443, 25, 587],
    services: ["HTTP", "HTTPS", "SMTP", "SMTP-SSL"],
    deviceType: "Web Server",
    os: "Linux",
    lastSeen: "2024-01-15 14:23:45",
    vulnerabilities: [],
    riskScore: 15,
    banner: "nginx/1.18.0",
    ssl: {
      issuer: "GlobalSign nv-sa",
      expires: "2024-08-15",
      valid: true,
      cipher: "TLS_AES_256_GCM_SHA384",
    },
    geolocation: {
      lat: 55.7558,
      lng: 37.6176,
      asn: "AS13238",
      isp: "Yandex LLC",
    },
    webInterface: "https://yandex.ru",
    shodanUrl: "https://www.shodan.io/host/77.88.55.242",
    yandexUrl: "https://yandex.ru/search/?text=77.88.55.242",
    cutestatUrl: "https://cutestat.com/yandex.ru",
    explanation: {
      simple: "This is Yandex - Russia's biggest search engine! Like Google but for Russian speakers.",
      technical: "Major web server infrastructure with load balancing and CDN distribution",
      riskLevel: "Very Safe - This is a legitimate major website",
      whatItDoes: "Helps millions of people search the internet, check email, and use maps",
    },
  },
  {
    id: 2,
    ip: "185.85.13.155",
    hostname: "cutestat.com",
    country: "Netherlands",
    city: "Amsterdam",
    org: "Hostinger International Limited",
    ports: [80, 443, 22],
    services: ["HTTP", "HTTPS", "SSH"],
    deviceType: "Web Server",
    os: "Linux",
    lastSeen: "2024-01-15 13:45:22",
    vulnerabilities: [],
    riskScore: 25,
    banner: "Apache/2.4.41",
    ssl: {
      issuer: "Let's Encrypt Authority X3",
      expires: "2024-06-15",
      valid: true,
      cipher: "TLS_AES_256_GCM_SHA384",
    },
    geolocation: {
      lat: 52.3676,
      lng: 4.9041,
      asn: "AS47583",
      isp: "Hostinger International Limited",
    },
    webInterface: "https://cutestat.com",
    shodanUrl: "https://www.shodan.io/host/185.85.13.155",
    yandexUrl: "https://yandex.ru/search/?text=cutestat.com",
    cutestatUrl: "https://cutestat.com",
    explanation: {
      simple: "CuteStat shows you how popular websites are - like a popularity contest for the internet!",
      technical: "Website analytics platform providing traffic statistics and SEO metrics",
      riskLevel: "Safe - Website analysis tool",
      whatItDoes: "Tells you how many people visit websites and how much they might be worth",
    },
  },
  {
    id: 3,
    ip: "8.8.8.8",
    hostname: "dns.google",
    country: "United States",
    city: "Mountain View",
    org: "Google LLC",
    ports: [53, 443, 853],
    services: ["DNS", "HTTPS", "DNS-over-TLS"],
    deviceType: "DNS Server",
    os: "Linux",
    lastSeen: "2024-01-15 12:12:01",
    vulnerabilities: [],
    riskScore: 10,
    banner: "Google Public DNS",
    ssl: {
      issuer: "Google Trust Services LLC",
      expires: "2024-08-15",
      valid: true,
      cipher: "TLS_AES_256_GCM_SHA384",
    },
    geolocation: {
      lat: 37.4056,
      lng: -122.0775,
      asn: "AS15169",
      isp: "Google LLC",
    },
    webInterface: "https://dns.google",
    shodanUrl: "https://www.shodan.io/host/8.8.8.8",
    yandexUrl: "https://yandex.ru/search/?text=8.8.8.8",
    cutestatUrl: "https://cutestat.com/dns.google",
    explanation: {
      simple: "This is Google's phone book for the internet! It helps your computer find websites.",
      technical: "Public DNS resolver providing domain name resolution services globally",
      riskLevel: "Very Safe - Google's official DNS service",
      whatItDoes: "When you type 'google.com', this server tells your computer the actual address to visit",
    },
  },
  {
    id: 4,
    ip: "93.184.216.34",
    hostname: "example.com",
    country: "United States",
    city: "Norwell",
    org: "Edgecast Inc.",
    ports: [80, 443],
    services: ["HTTP", "HTTPS"],
    deviceType: "Web Server",
    os: "Linux",
    lastSeen: "2024-01-15 11:30:15",
    vulnerabilities: [],
    riskScore: 5,
    banner: "Apache/2.4.41",
    ssl: {
      issuer: "DigiCert Inc",
      expires: "2024-12-15",
      valid: true,
      cipher: "TLS_AES_256_GCM_SHA384",
    },
    geolocation: {
      lat: 42.1596,
      lng: -70.8217,
      asn: "AS15133",
      isp: "Edgecast Inc.",
    },
    webInterface: "https://example.com",
    shodanUrl: "https://www.shodan.io/host/93.184.216.34",
    yandexUrl: "https://yandex.ru/search/?text=example.com",
    cutestatUrl: "https://cutestat.com/example.com",
    explanation: {
      simple: "This is the internet's test website! It's like a practice dummy for web developers.",
      technical: "Reserved domain for documentation and testing purposes per RFC 2606",
      riskLevel: "Completely Safe - Official test website",
      whatItDoes: "Shows a simple page that says 'Example Domain' - used for teaching and testing",
    },
  },
]

/**
 * Renders an interactive, client-side table of real internet devices and websites with export and deep-analysis tools.
 *
 * The component displays a list of pre-populated results and provides:
 * - Beginner Mode toggle to show/hide short explanations.
 * - Sorting control (UI-only; state updates but results are not re-ordered here).
 * - CSV download of visible results.
 * - Per-row quick actions (copy IP/hostname/org, open external links, open maps).
 * - A "Deep Analysis" dialog with tabbed views: Simple, Technical, Security, Network, Russian Tools, and Global Tools.
 * - Conditional SSL details (renders certificate info when available; shows a warning when absent).
 *
 * Side effects:
 * - Copies text to the clipboard via navigator.clipboard.writeText.
 * - Opens external URLs in a new tab/window via window.open.
 * - Creates and triggers a Blob URL for CSV file download.
 *
 * @returns JSX element containing the search results UI.
 */
export function SearchResults() {
  const [selectedResult, setSelectedResult] = useState(null)
  const [sortBy, setSortBy] = useState("riskScore")
  const [showExplanations, setShowExplanations] = useState(true)

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-red-500 border-red-500"
    if (score >= 60) return "text-orange-500 border-orange-500"
    if (score >= 40) return "text-yellow-500 border-yellow-500"
    return "text-green-500 border-green-500"
  }

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "web server":
      case "cdn/web server":
        return Server
      case "database":
        return Database
      case "ip camera":
        return Camera
      case "router":
        return Router
      case "dns server":
        return Globe
      default:
        return Monitor
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-6">
      {/* Beginner Mode Toggle */}
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <span>
            🔰 <strong>Beginner Mode:</strong> We'll explain everything in simple terms so anyone can understand!
          </span>
          <Button variant="outline" size="sm" onClick={() => setShowExplanations(!showExplanations)}>
            {showExplanations ? "Hide" : "Show"} Simple Explanations
          </Button>
        </AlertDescription>
      </Alert>

      {/* Results Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Real Internet Device Results</CardTitle>
              <CardDescription>
                Found {realResults.length} real devices and websites from around the world 🌍
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="riskScore">Safety Level</SelectItem>
                  <SelectItem value="lastSeen">Last Seen</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                  <SelectItem value="deviceType">Device Type</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const csvContent = realResults
                    .map((r) => `${r.ip},${r.hostname},${r.country},${r.org},${r.riskScore}`)
                    .join("\n")
                  const blob = new Blob([csvContent], { type: "text/csv" })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "real-cyber-search-results.csv"
                  a.click()
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Results
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device & Website</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>What It Does</TableHead>
                  <TableHead>Safety Level</TableHead>
                  <TableHead>Last Checked</TableHead>
                  <TableHead>Explore</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {realResults.map((result) => {
                  const DeviceIcon = getDeviceIcon(result.deviceType)
                  return (
                    <TableRow key={result.id} className="hover:bg-accent/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <DeviceIcon className="h-4 w-4 text-orange-500" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className="font-medium cursor-pointer hover:text-orange-500 transition-colors"
                                onClick={() => copyToClipboard(result.ip)}
                                title="Click to copy IP address"
                              >
                                {result.ip}
                              </span>
                              <Copy className="h-3 w-3 text-muted-foreground cursor-pointer hover:text-orange-500" />
                              <span
                                className="inline-flex"
                                title="Visit the actual website"
                                onClick={() => openExternalLink(result.webInterface)}
                              >
                                <ExternalLink className="h-3 w-3 text-muted-foreground cursor-pointer hover:text-blue-500" />
                              </span>
                            </div>
                            <div
                              className="text-xs text-muted-foreground cursor-pointer hover:text-blue-500"
                              onClick={() => copyToClipboard(result.hostname)}
                              title="Click to copy website name"
                            >
                              {result.hostname}
                            </div>
                            {showExplanations && (
                              <div className="text-xs text-blue-600 mt-1 max-w-xs">💡 {result.explanation.simple}</div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-flex"
                            title="View location on Google Maps"
                            onClick={() =>
                              openExternalLink(
                                `https://www.google.com/maps?q=${result.geolocation.lat},${result.geolocation.lng}`,
                              )
                            }
                          >
                            <MapPin className="h-3 w-3 text-muted-foreground cursor-pointer hover:text-green-500" />
                          </span>
                          <div>
                            <div className="text-sm cursor-pointer hover:text-blue-500">
                              {result.city}, {result.country}
                            </div>
                            <div
                              className="text-xs text-muted-foreground cursor-pointer hover:text-blue-500"
                              onClick={() => copyToClipboard(result.org)}
                              title="Click to copy company name"
                            >
                              {result.org}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {result.services.slice(0, 2).map((service, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs cursor-pointer hover:bg-accent"
                              onClick={() => copyToClipboard(`${service}:${result.ports[i]}`)}
                              title={`Port ${result.ports[i]} - Click to copy`}
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                        {showExplanations && (
                          <div className="text-xs text-green-600 mt-1">🎯 {result.explanation.whatItDoes}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRiskColor(result.riskScore)}>
                          {result.riskScore <= 20
                            ? "Very Safe"
                            : result.riskScore <= 40
                              ? "Safe"
                              : result.riskScore <= 60
                                ? "Caution"
                                : "Risky"}
                        </Badge>
                        {showExplanations && (
                          <div className="text-xs text-purple-600 mt-1">🛡️ {result.explanation.riskLevel}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{result.lastSeen}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" title="Deep dive analysis">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <DeviceIcon className="h-5 w-5 text-orange-500" />
                                  Deep Analysis: {result.hostname}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => openExternalLink(result.webInterface)}
                                    title="Visit the actual website"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
                                </DialogTitle>
                                <DialogDescription>
                                  🔍 Complete security and technical analysis of {result.hostname}
                                </DialogDescription>
                              </DialogHeader>
                              <Tabs defaultValue="simple" className="w-full">
                                <TabsList className="grid w-full grid-cols-6">
                                  <TabsTrigger value="simple">🔰 Simple</TabsTrigger>
                                  <TabsTrigger value="technical">🔧 Technical</TabsTrigger>
                                  <TabsTrigger value="security">🛡️ Security</TabsTrigger>
                                  <TabsTrigger value="network">🌐 Network</TabsTrigger>
                                  <TabsTrigger value="russian">🇷🇺 Russian Tools</TabsTrigger>
                                  <TabsTrigger value="global">🌍 Global Tools</TabsTrigger>
                                </TabsList>

                                <TabsContent value="simple" className="space-y-4">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4" />
                                        What Is This? (Beginner Explanation)
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertDescription>
                                          <strong>Simple Explanation:</strong> {result.explanation.simple}
                                        </AlertDescription>
                                      </Alert>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">🌐 Website Address</Label>
                                          <p className="text-sm">
                                            <code className="bg-muted px-2 py-1 rounded">{result.ip}</code> is like the
                                            street address for this website
                                          </p>
                                        </div>
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">🏠 Friendly Name</Label>
                                          <p className="text-sm">
                                            <code className="bg-muted px-2 py-1 rounded">{result.hostname}</code> is the
                                            easy-to-remember name
                                          </p>
                                        </div>
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">🏢 Who Owns It</Label>
                                          <p className="text-sm">{result.org} - the company that runs this</p>
                                        </div>
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">📍 Where It Lives</Label>
                                          <p className="text-sm">
                                            {result.city}, {result.country} - physical server location
                                          </p>
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <Label className="text-base font-medium">🎯 What Does It Do?</Label>
                                        <p className="text-sm bg-blue-50 p-3 rounded-lg">
                                          {result.explanation.whatItDoes}
                                        </p>
                                      </div>

                                      <div className="space-y-2">
                                        <Label className="text-base font-medium">🛡️ Is It Safe?</Label>
                                        <p className="text-sm bg-green-50 p-3 rounded-lg">
                                          {result.explanation.riskLevel}
                                        </p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </TabsContent>

                                <TabsContent value="technical" className="space-y-4">
                                  <div className="grid grid-cols-2 gap-6">
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                          <Server className="h-4 w-4" />
                                          Technical Details
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-3">
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">IP Address:</span>
                                          <span
                                            className="font-mono cursor-pointer hover:text-orange-500"
                                            onClick={() => copyToClipboard(result.ip)}
                                            title="Click to copy"
                                          >
                                            {result.ip}
                                          </span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Operating System:</span>
                                          <span>{result.os}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Web Server:</span>
                                          <span>{result.banner}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Device Type:</span>
                                          <Badge variant="secondary">{result.deviceType}</Badge>
                                        </div>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                          <Network className="h-4 w-4" />
                                          Network Information
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-3">
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">ASN:</span>
                                          <span
                                            className="cursor-pointer hover:text-blue-500"
                                            onClick={() =>
                                              openExternalLink(`https://bgp.he.net/${result.geolocation.asn}`)
                                            }
                                            title="View network routing info"
                                          >
                                            {result.geolocation.asn}
                                          </span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">ISP:</span>
                                          <span>{result.geolocation.isp}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Coordinates:</span>
                                          <span
                                            className="cursor-pointer hover:text-green-500"
                                            onClick={() =>
                                              openExternalLink(
                                                `https://www.google.com/maps?q=${result.geolocation.lat},${result.geolocation.lng}`,
                                              )
                                            }
                                            title="View on Google Maps"
                                          >
                                            {result.geolocation.lat}, {result.geolocation.lng}
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </TabsContent>

                                <TabsContent value="security" className="space-y-4">
                                  {result.ssl ? (
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                          <Lock className="h-4 w-4 text-green-500" />🔒 Security Certificate (SSL/TLS)
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-4">
                                        <Alert>
                                          <Shield className="h-4 w-4" />
                                          <AlertDescription>
                                            <strong>Good News!</strong> This website has a security certificate, which
                                            means your connection is encrypted and safe from eavesdroppers.
                                          </AlertDescription>
                                        </Alert>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <Label>Certificate Issuer (Who Verified It):</Label>
                                            <p className="font-mono text-sm">{result.ssl.issuer}</p>
                                          </div>
                                          <div>
                                            <Label>Expires On:</Label>
                                            <p className="text-sm">{result.ssl.expires}</p>
                                          </div>
                                          <div>
                                            <Label>Encryption Method:</Label>
                                            <p className="font-mono text-sm">{result.ssl.cipher}</p>
                                          </div>
                                          <div>
                                            <Label>Status:</Label>
                                            <Badge variant="outline" className="border-green-500 text-green-500">
                                              ✅ Valid & Secure
                                            </Badge>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ) : (
                                    <div className="text-center py-12">
                                      <Unlock className="h-16 w-16 mx-auto mb-4 text-orange-500" />
                                      <h3 className="text-lg font-medium mb-2">⚠️ No Security Certificate</h3>
                                      <p className="text-muted-foreground">
                                        This service doesn't use encryption - be careful with sensitive information!
                                      </p>
                                    </div>
                                  )}
                                </TabsContent>

                                <TabsContent value="network" className="space-y-4">
                                  <div className="grid gap-4">
                                    {result.services.map((service, i) => (
                                      <Card key={i}>
                                        <CardHeader>
                                          <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg flex items-center gap-2">
                                              <Network className="h-4 w-4" />
                                              {service} Service
                                            </CardTitle>
                                            <div className="flex items-center gap-2">
                                              <Badge variant="outline">Port {result.ports[i]}</Badge>
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                  openExternalLink(`${result.webInterface}:${result.ports[i]}`)
                                                }
                                                title="Try to connect"
                                              >
                                                <ExternalLink className="h-3 w-3" />
                                              </Button>
                                            </div>
                                          </div>
                                        </CardHeader>
                                        <CardContent>
                                          <div className="space-y-2">
                                            <Alert>
                                              <Info className="h-4 w-4" />
                                              <AlertDescription>
                                                <strong>What is {service}?</strong>{" "}
                                                {service === "HTTP"
                                                  ? "Regular web traffic - like loading web pages"
                                                  : service === "HTTPS"
                                                    ? "Secure web traffic - encrypted web pages"
                                                    : service === "DNS"
                                                      ? "Internet phone book - helps find website addresses"
                                                      : service === "SMTP"
                                                        ? "Email sending service"
                                                        : service === "SSH"
                                                          ? "Secure remote access for administrators"
                                                          : "Network service for communication"}
                                              </AlertDescription>
                                            </Alert>
                                            <div className="flex items-center gap-2">
                                              <Label>Status:</Label>
                                              <Badge variant="outline" className="border-green-500 text-green-500">
                                                <Activity className="h-3 w-3 mr-1" />🟢 Active & Running
                                              </Badge>
                                            </div>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                </TabsContent>

                                <TabsContent value="russian" className="space-y-4">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="flex items-center gap-2">
                                        🇷🇺 Russian Analysis Tools
                                      </CardTitle>
                                      <CardDescription>
                                        Analyze this device using popular Russian cybersecurity and web analysis
                                        platforms
                                      </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-start bg-transparent hover:bg-red-50"
                                        onClick={() => openExternalLink(result.yandexUrl)}
                                      >
                                        <img
                                          src="/images/yandex-screenshot.jpg"
                                          className="h-4 w-4 mr-2 rounded"
                                          alt="Yandex"
                                        />
                                        🔍 Search on Yandex.ru (Russia's Google)
                                      </Button>
                                      <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertDescription>
                                          <strong>What is Yandex?</strong> Russia's biggest search engine! Like Google
                                          but made in Russia. Great for finding Russian websites and information.
                                        </AlertDescription>
                                      </Alert>

                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-start bg-transparent hover:bg-blue-50"
                                        onClick={() => openExternalLink(result.cutestatUrl)}
                                      >
                                        <img
                                          src="/images/cutestat-screenshot.jpg"
                                          className="h-4 w-4 mr-2 rounded"
                                          alt="CuteStat"
                                        />
                                        📊 Analyze on CuteStat.com (Website Stats)
                                      </Button>
                                      <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertDescription>
                                          <strong>What is CuteStat?</strong> Shows you how popular websites are! It
                                          tells you how many people visit, how much the site might be worth, and other
                                          cool statistics.
                                        </AlertDescription>
                                      </Alert>

                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-start bg-transparent hover:bg-purple-50"
                                        onClick={() => openExternalLink(`https://2ip.ru/whois/?query=${result.ip}`)}
                                      >
                                        <Globe className="h-4 w-4 mr-2" />🔍 Check on 2ip.ru (Russian IP Lookup)
                                      </Button>
                                      <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertDescription>
                                          <strong>What is 2ip.ru?</strong> A Russian service that tells you who owns an
                                          IP address, where it's located, and other network information.
                                        </AlertDescription>
                                      </Alert>
                                    </CardContent>
                                  </Card>
                                </TabsContent>

                                <TabsContent value="global" className="space-y-4">
                                  <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                      <CardHeader>
                                        <CardTitle>🌍 Global Security Tools</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-2">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() => openExternalLink(result.shodanUrl)}
                                        >
                                          <ExternalLink className="h-3 w-3 mr-2" />🔍 Shodan (Internet Device Search)
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          The "Google for hackers" - finds internet-connected devices
                                        </p>

                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() =>
                                            openExternalLink(`https://www.virustotal.com/gui/ip-address/${result.ip}`)
                                          }
                                        >
                                          <Shield className="h-3 w-3 mr-2" />
                                          🛡️ VirusTotal (Malware Check)
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          Checks if this IP address is used for malware or attacks
                                        </p>

                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() => openExternalLink(`https://urlvoid.com/ip/${result.ip}`)}
                                        >
                                          <AlertTriangle className="h-3 w-3 mr-2" />
                                          ⚠️ URLVoid (Reputation Check)
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          Checks if this website has a bad reputation online
                                        </p>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardHeader>
                                        <CardTitle>🌐 Network Analysis</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-2">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() => openExternalLink(`https://bgp.he.net/ip/${result.ip}`)}
                                        >
                                          <Network className="h-3 w-3 mr-2" />🌐 BGP Routing Info
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          Shows how internet traffic reaches this server
                                        </p>

                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() =>
                                            openExternalLink(`https://www.abuseipdb.com/check/${result.ip}`)
                                          }
                                        >
                                          <Shield className="h-3 w-3 mr-2" />🚨 AbuseIPDB (Abuse Reports)
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          Checks if people have reported this IP for bad behavior
                                        </p>

                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full justify-start bg-transparent"
                                          onClick={() => openExternalLink(`https://whois.domaintools.com/${result.ip}`)}
                                        >
                                          <Globe className="h-3 w-3 mr-2" />📋 WHOIS Lookup
                                        </Button>
                                        <p className="text-xs text-muted-foreground">
                                          Shows who registered this IP address and when
                                        </p>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </DialogContent>
                          </Dialog>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openExternalLink(result.webInterface)}
                            title="Visit the actual website"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openExternalLink(result.yandexUrl)}
                            title="Search on Yandex"
                          >
                            <Globe className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
