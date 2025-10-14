import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const genres = [
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
];

const ShowFilter = () => {
  return (
    <div className="flex flex-col  w-full h-full gap-6">
      <Tabs defaultValue="genre" className='h-full'>
        <TabsList className='flex flex-col gap-2 w-[120px] h-[66vh]'>
          <TabsTrigger value="genre" className=''>Genre</TabsTrigger>
          <TabsTrigger value="sort" className=''>Sort By</TabsTrigger>
        </TabsList>

        {/* Genre Tab Content */}
        <TabsContent value="genre" className='w-full'>
          <div className="px-3 py-2 space-y-2 rounded-lg border w-full h-[66vh] overflow-y-auto">
            {genres.map((genre) => (
              <label htmlFor={genre.toLowerCase().replace(/\s+/g, '')} key={genre} className="flex gap-2 text-sm font-semibold overflow-hidden">
                <input type="checkbox" id={genre.toLowerCase().replace(/\s+/g, '')} />
                {genre}
              </label>
            ))}
          </div>
        </TabsContent>

        {/* Sort By Tab Content */}
        <TabsContent value="sort" className='w-full '>
          <div className="px-3 py-2 space-y-2 rounded-lg border flex flex-col w-full h-[65vh]">
            <label htmlFor="popularity" className="flex gap-2 text-sm font-semibold">
              <input type="radio" id="popularity" name="sort" />
              Popularity
            </label>
            <label htmlFor="date" className="flex gap-2 text-sm font-semibold">
              <input type="radio" id="date" name="sort" />
              Date
            </label>
            <label htmlFor="pricel" className="flex gap-2 text-sm font-semibold">
              <input type="radio" id="pricel" name="sort" />
              Price: Low to High
            </label>
            <label htmlFor="priceh" className="flex gap-2 text-sm font-semibold">
              <input type="radio" id="priceh" name="sort" />
              Price: High to Low
            </label>
            <label htmlFor="distance" className="flex gap-2 text-sm font-semibold">
              <input type="radio" id="distance" name="sort" />
              Distance: Near to Far
            </label>
          </div>
        </TabsContent>

      </Tabs>
     </div>
  );
}

export default ShowFilter;
