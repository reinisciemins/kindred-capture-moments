
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortAsc, SortDesc } from "lucide-react";

type SortOption = "name-asc" | "name-desc" | "price-low" | "price-high" | "rating-high" | "distance";

interface SortOptionsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  resultCount: number;
}

const SortOptions = ({ value, onChange, resultCount }: SortOptionsProps) => {
  const handleChange = (newValue: string) => {
    onChange(newValue as SortOption);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-muted-foreground">
        {resultCount} {resultCount === 1 ? "rezultāts" : "rezultāti"}
      </p>
      
      <div className="flex items-center">
        <label htmlFor="sort-select" className="text-sm mr-2 hidden sm:inline-block">
          Kārtot pēc:
        </label>
        <Select value={value} onValueChange={handleChange}>
          <SelectTrigger className="w-[170px] sm:w-[220px]" id="sort-select">
            <SelectValue placeholder="Kārtot pēc" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rating-high">Augstākais vērtējums</SelectItem>
              <SelectItem value="name-asc">Vārds (A-Z)</SelectItem>
              <SelectItem value="name-desc">Vārds (Z-A)</SelectItem>
              <SelectItem value="price-low">Cena (zemākā vispirms)</SelectItem>
              <SelectItem value="price-high">Cena (augstākā vispirms)</SelectItem>
              <SelectItem value="distance">Tuvākais attālums</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SortOptions;
