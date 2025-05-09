
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';

const photographyTypes = [
  { value: 'family', label: 'Family' },
  { value: 'newborn', label: 'Newborn' },
  { value: 'maternity', label: 'Maternity' },
  { value: 'children', label: 'Children' },
  { value: 'engagement', label: 'Engagement' },
];

const SearchFilters = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
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
            placeholder="Enter city or zip code"
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Photography Type Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full lg:w-auto justify-between gap-2">
              <span>Photography Type</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {selectedTypes.length || 'All'}
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
        <Select>
          <SelectTrigger className="w-full lg:w-[180px]">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <SelectValue placeholder="Any Date" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Date</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="next-month">Next Month</SelectItem>
            <SelectItem value="custom">Custom Date</SelectItem>
          </SelectContent>
        </Select>

        {/* Mobile Filters Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden w-full">
              <Filter size={18} className="mr-2" /> More Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your search with additional filters.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div className="space-y-2">
                <Label>Price Range (${priceRange[0]} - ${priceRange[1]})</Label>
                <Slider
                  defaultValue={priceRange}
                  max={1000}
                  min={50}
                  step={50}
                  onValueChange={(value) => setPriceRange(value as number[])}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Photography Type</Label>
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
            </div>
            <SheetFooter>
              <Button className="w-full">Apply Filters</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Desktop Filters Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="hidden lg:flex">
              <Filter size={18} className="mr-2" /> More Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Price Range (${priceRange[0]} - ${priceRange[1]})</Label>
                <Slider
                  defaultValue={priceRange}
                  max={1000}
                  min={50}
                  step={50}
                  onValueChange={(value) => setPriceRange(value as number[])}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Rating</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Rating</SelectItem>
                    <SelectItem value="4plus">4+ Stars</SelectItem>
                    <SelectItem value="45plus">4.5+ Stars</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Search Button */}
        <Button className="w-full lg:w-auto">
          <Search size={18} className="mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
