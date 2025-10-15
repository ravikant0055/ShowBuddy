'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

interface ShowFilterProps {
  defaultFilters?: {
    genres?: string[]
    sort?: string
  }
  onChange?: (filters: { genres: string[]; sort: string }) => void
}

const genresList = [
  'Adventure',
  'Art Exhibitions',
  'Business Conferences',
  'Celebrations',
  'Clubbing',
  'Comedy',
  'Community Meetups',
  'Concerts',
  'Conferences',
  'Cricket Matches',
  'DJ Nights',
  'Dating',
  'Diwali',
  'Education Conferences',
  'Fests & Fairs',
  'Fitness',
  'Flea Markets',
  'Food & Beverage Fests',
  'Food & Drinks',
  'Football Matches',
  'Kabaddi Matches',
  'Kids',
  'Kids Festivals',
  'Literary',
  'Live Gigs',
  'Magic Shows',
  'Marathons',
  'Motorsport Matches',
  'Music',
  'Music Festivals',
  'Nightlife',
  'Open Mics',
  'Open Mics & Jams',
  'Parties',
  'Performances',
  'Pop Culture Fairs',
  'Roast',
  'Screenings',
  'Social Mixers',
  'Sports',
  'Standup',
  'Theatre',
  'Themed Parties'
]

const ShowFilter: React.FC<ShowFilterProps> = ({ defaultFilters, onChange }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(defaultFilters?.genres || [])
  const [sort, setSort] = useState<string>(defaultFilters?.sort || '')

  useEffect(() => {
    setSelectedGenres(defaultFilters?.genres || [])
    setSort(defaultFilters?.sort || '')
  }, [defaultFilters])

  const toggleGenre = (genre: string) => {
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre]

    setSelectedGenres(updatedGenres)
    onChange?.({ genres: updatedGenres, sort })
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    onChange?.({ genres: selectedGenres, sort: value })
  }

  return (
    <div className="flex w-full h-full gap-6">
      <Tabs defaultValue="genre" className="w-full">
        {/* Left Tabs Menu */}
        <TabsList className="flex flex-col gap-2 w-[120px] h-[66vh]">
          <TabsTrigger value="genre">Genre</TabsTrigger>
          <TabsTrigger value="sort">Sort By</TabsTrigger>
        </TabsList>

        {/* Genre Tab */}
        <TabsContent value="genre" className="w-full">
          <div className="px-3 py-2 space-y-2 rounded-lg border w-full h-[66vh] overflow-y-auto">
            {genresList.map((genre) => (
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

        {/* Sort Tab */}
        <TabsContent value="sort" className="w-full">
          <div className="px-3 py-2 space-y-2 rounded-lg border flex flex-col w-full h-[65vh]">
            {['popularity', 'date', 'pricel', 'priceh', 'distance'].map((value) => {
              const labelMap: Record<string, string> = {
                popularity: 'Popularity',
                date: 'Date',
                pricel: 'Price: Low to High',
                priceh: 'Price: High to Low',
                distance: 'Distance: Near to Far',
              }
              return (
                <label key={value} className="flex gap-2 text-sm font-semibold">
                  <input
                    type="radio"
                    name="sort"
                    checked={sort === value}
                    onChange={() => handleSortChange(value)}
                  />
                  {labelMap[value]}
                </label>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ShowFilter
