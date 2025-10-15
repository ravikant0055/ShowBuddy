'use client'
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const genresList = [
  'Adventure','Art Exhibitions','Business Conferences','Celebrations','Clubbing','Comedy',
  'Community Meetups','Concerts','Conferences','Cricket Matches','DJ Nights','Dating','Diwali',
  'Education Conferences','Fests & Fairs','Fitness','Flea Markets','Food & Beverage Fests','Food & Drinks',
  'Football Matches','Kabaddi Matches','Kids','Kids Festivals','Literary','Live Gigs','Magic Shows',
  'Marathons','Motorsport Matches','Music','Music Festivals','Nightlife','Open Mics','Open Mics & Jams',
  'Parties','Performances','Pop Culture Fairs','Roast','Screenings','Social Mixers','Sports','Standup',
  'Theatre','Themed Parties'
]

interface ShowFilterProps {
  initialFilters: { genres: string[]; sort: string }
}

// Expose a method to parent via ref
export interface ShowFilterRef {
  getFilters: () => { genres: string[]; sort: string }
}

const ShowFilter = forwardRef<ShowFilterRef, ShowFilterProps>(({ initialFilters }, ref) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialFilters.genres)
  const [sort, setSort] = useState<string>(initialFilters.sort)

  useEffect(() => {
    setSelectedGenres(initialFilters.genres)
    setSort(initialFilters.sort)
  }, [initialFilters])

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre])
  }

  const handleSortChange = (value: string) => setSort(value)

  // Expose method for parent
  useImperativeHandle(ref, () => ({
    getFilters: () => ({ genres: selectedGenres, sort })
  }))

  return (
    <div className="flex w-full h-full gap-6">
      <Tabs defaultValue="genre" className="w-full">
        <TabsList className="flex flex-col gap-2 w-[120px] h-[66vh]">
          <TabsTrigger value="genre">Genre</TabsTrigger>
          <TabsTrigger value="sort">Sort By</TabsTrigger>
        </TabsList>

        <TabsContent value="genre">
          <div className="px-3 py-2 space-y-2 rounded-lg border w-full h-[66vh] overflow-y-auto">
            {genresList.map(genre => (
              <label key={genre} className="flex gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                />
                {genre}
              </label>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sort">
          <div className="px-3 py-2 space-y-2 rounded-lg border flex flex-col w-full h-[65vh]">
            {['popularity','date','price_asc','price_desc','distance'].map(value => (
              <label key={value} className="flex gap-2 text-sm font-semibold">
                <input
                  type="radio"
                  name="sort"
                  checked={sort === value}
                  onChange={() => handleSortChange(value)}
                />
                {{
                  popularity: 'Popularity',
                  date: 'Date',
                  price_asc: 'Price: Low to High',
                  price_desc: 'Price: High to Low',
                  distance: 'Distance: Near to Far'
                }[value]}
              </label>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
})

ShowFilter.displayName = 'ShowFilter'
export default ShowFilter
