
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SignupPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planParam = searchParams.get('plan') || '';

  const [activeTab, setActiveTab] = useState(planParam ? "photographer" : "client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", { email, password, name, userType: activeTab });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Izveidot kontu</CardTitle>
            <CardDescription>
              Ievadiet savu informāciju, lai izveidotu kontu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="mb-6"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client">Klientam</TabsTrigger>
                <TabsTrigger value="photographer">Fotogrāfam</TabsTrigger>
              </TabsList>
              <TabsContent value="client">
                <p className="text-sm text-muted-foreground mb-4">
                  Izveidojiet klientu kontu, lai meklētu un rezervētu fotogrāfus jūsu īpašajiem brīžiem.
                </p>
              </TabsContent>
              <TabsContent value="photographer">
                <p className="text-sm text-muted-foreground mb-4">
                  Izveidojiet fotogrāfa kontu, lai sāktu piedāvāt savus pakalpojumus un iegūtu jaunus klientus.
                </p>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Pilns vārds</Label>
                <Input
                  id="name"
                  placeholder="Jānis Bērziņš"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-pasts</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="janis@piemers.lv"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Parole</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Parolei jābūt vismaz 8 rakstzīmēm garai.
                </p>
              </div>

              {activeTab === "photographer" && planParam && (
                <div className="bg-secondary/40 p-3 rounded-md text-sm">
                  <p className="font-medium">Izvēlētais plāns: {planParam.charAt(0).toUpperCase() + planParam.slice(1)}</p>
                  <p className="text-muted-foreground">Jūs varēsiet mainīt vai apstiprināt savu plānu pēc reģistrācijas.</p>
                </div>
              )}

              <Button type="submit" className="w-full">
                Reģistrēties
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Reģistrējoties jūs piekrītat mūsu{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Noteikumiem un nosacījumiem
                </Link>{" "}
                un{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privātuma politikai
                </Link>
                .
              </p>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Vai
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Reģistrēties ar Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-center text-sm text-muted-foreground">
              Jau ir konts?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Pieslēgties
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default SignupPage;
