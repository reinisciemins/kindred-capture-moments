
import { useState } from 'react';
import { Search, Filter, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';

const photographyTypes = [
  { value: 'family', label: 'Ģimene' },
  { value: 'newborn', label: 'Jaundzimušie' },
  { value: 'maternity', label: 'Grūtniecība' },
  { value: 'children', label: 'Bērni' },
  { value: 'engagement', label: 'Saderināšanās' },
];

interface SearchFiltersProps {
  onSearch: (criteria: any) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('any');
  const [selectedRating, setSelectedRating] = useState('any');

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSearchClick = () => {
    onSearch({
      location,
      type: selectedTypes,
      date: selectedDate,
      priceRange,
      rating: selectedRating
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Location Search */}
        <div className="relative flex-grow">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <MapPin size={18} />
          </div>
          <Input
            type="text"
            placeholder="Ievadiet pilsētu vai pasta indeksu"
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Photography Type Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full lg:w-auto justify-between gap-2">
              <span>Fotogrāfijas veids</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {selectedTypes.length || 'Visi'}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="space-y-2">
              {photographyTypes.map((type) => (
                <div key={type.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`type-${type.value}`}
                    checked={selectedTypes.includes(type.value)}
                    onChange={() => toggleType(type.value)}
                    className="mr-2"
                  />
                  <Label htmlFor={`type-${type.value}`}>{type.label}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Date Selector */}
        <Select onValueChange={setSelectedDate} defaultValue="any">
          <SelectTrigger className="w-full lg:w-[180px]">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <SelectValue placeholder="Jebkurš datums" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Jebkurš datums</SelectItem>
            <SelectItem value="this-week">Šī nedēļa</SelectItem>
            <SelectItem value="this-month">Šis mēnesis</SelectItem>
            <SelectItem value="next-month">Nākamais mēnesis</SelectItem>
            <SelectItem value="custom">Izvēlēts datums</SelectItem>
          </SelectContent>
        </Select>

        {/* Mobile Filters Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden w-full">
              <Filter size={18} className="mr-2" /> Vairāk filtru
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtri</SheetTitle>
              <SheetDescription>
                Precizējiet meklēšanu ar papildu filtriem.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div className="space-y-2">
                <Label>Cenu diapazons (€{priceRange[0]} - €{priceRange[1]})</Label>
                <Slider
                  value={priceRange}
                  max={1000}
                  min={50}
                  step={50}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Fotogrāfijas veids</Label>
                <div className="space-y-2">
                  {photographyTypes.map((type) => (
                    <div key={type.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-type-${type.value}`}
                        checked={selectedTypes.includes(type.value)}
                        onChange={() => toggleType(type.value)}
                        className="mr-2"
                      />
                      <Label htmlFor={`mobile-type-${type.value}`}>{type.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Vērtējums</Label>
                <Select onValueChange={setSelectedRating} defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Jebkurš vērtējums" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Jebkurš vērtējums</SelectItem>
                    <SelectItem value="4plus">4+ zvaigznes</SelectItem>
                    <SelectItem value="45plus">4.5+ zvaigznes</SelectItem>
                    <SelectItem value="5">5 zvaigznes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <SheetFooter>
              <Button className="w-full" onClick={handleSearchClick}>Pielietot filtrus</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Desktop Filters Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="hidden lg:flex">
              <Filter size={18} className="mr-2" /> Vairāk filtru
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Cenu diapazons (€{priceRange[0]} - €{priceRange[1]})</Label>
                <Slider
                  value={priceRange}
                  max={1000}
                  min={50}
                  step={50}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Vērtējums</Label>
                <Select onValueChange={setSelectedRating} defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Jebkurš vērtējums" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Jebkurš vērtējums</SelectItem>
                    <SelectItem value="4plus">4+ zvaigznes</SelectItem>
                    <SelectItem value="45plus">4.5+ zvaigznes</SelectItem>
                    <SelectItem value="5">5 zvaigznes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Search Button */}
        <Button className="w-full lg:w-auto" onClick={handleSearchClick}>
          <Search size={18} className="mr-2" />
          Meklēt
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
