
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!name || !email || !password) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Paroles nesakrīt");
      setIsLoading(false);
      return;
    }

    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = existingUsers.some((user: any) => user.email === email);

    if (emailExists) {
      toast.error("Lietotājs ar šādu e-pastu jau eksistē");
      setIsLoading(false);
      return;
    }

    // Mock registration
    setTimeout(() => {
      // Create new user
      const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In a real app, this should be hashed
        role,
        createdAt: new Date().toISOString()
      };

      // Add to users list
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      
      // Log in the user
      localStorage.setItem("user", JSON.stringify(newUser));
      
      toast.success("Konts veiksmīgi izveidots", {
        description: `Laipni lūdzam, ${name}!`
      });
      
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Reģistrēties</CardTitle>
            <CardDescription>
              Izveidojiet kontu, lai sāktu izmantot mūsu pakalpojumus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Vārds un uzvārds</Label>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Apstiprināt paroli</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Es vēlos reģistrēties kā:</Label>
                <RadioGroup value={role} onValueChange={setRole} className="flex space-x-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="user" id="user" />
                    <Label htmlFor="user">Klients</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="photographer" id="photographer" />
                    <Label htmlFor="photographer">Fotogrāfs</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Reģistrējas..." : "Reģistrēties"}
              </Button>
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
