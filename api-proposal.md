#Armin Linke Anthropocene API PROPOSAL

####Entities list

Returns json data about all entities in our corpus

######HTTP REQUEST

`GET http://www.dictosite.org/api/entities`

######SUCCESS RESPONSE:

```
{
  'themes':
    [
      { 'name' : 'agriculture', 'value' : 20, id:'theme-agriculture' },
      { 'name' : 'chemicals', 'value' : 8, id:'theme-chemicals' },
      ...
    ],
  'speakers':
    [
      { 'name' : 'Gabibbo', 'value' : 20, id:'speaker-gabibbo' },
      { 'name' : 'Fantozzi', 'value' : 2, id:'speaker-fantozzi'},
      ...
    ],
  'places':
    [
      { 'name' : 'Rionero in Vulture', 'value' : 2, id:'place-rionero-in-vulture' },
      { 'name' : 'Ortona', 'value' : 20, id:'place-ortona' },
      ...
    ]
}
```

Notes on data :
* 'value' attribute corresponds to the total number of occurence of an entity
* 'id' attribute is a slug build with : entity's type + '-' + slugified name

####Single entity

Returns json data about all video chunks containing the entity

######HTTP REQUEST

`GET http://www.dictosite.org/api/entities/:id`

######SUCCESS RESPONSE:

```
{
  'name':'agriculture',
  'id':'theme-agriculture',
  'chunks':
    [
      { 
        'videoId' : 'an-incredible-story',
        'videoTitle': 'an incredible story',

        'id' : 'an-incredible-story-12',
        'start':20,
        'end' : 32,
        'duration': 12,

        'content' : 'this is the content of the chunk',
        'speakers': [
            {
              'name': 'Nebojsa Nakicenovic',
              'id': 'speaker-nebojsa-nakicenovic'
            },
            {
              'name': 'Jan Zalasiewicz',
              'id': 'speaker-jan-zalasiewicz'
            },
            ...
          ],
        'themes':[
              {
                'name' : 'agriculture',
                'id':'theme-agriculture'
              },
              { 'name' : 'chemicals',
                'id': 'theme-chemicals'
              },
              ...
            ],
        'places': [
            {
              'name' : 'Rionero in Vulture',
              'id':'place-rionero-in-vulture'
            },
            {
              'name' : 'Ortona',
              'id': 'place-ortona'
            },
            ...
          ]
        },
      { 
        'videoId' : 'an-amazing-story',
        'videoTitle': 'an amazing story',

        'id' : 'an-amazing-story-15',
        'start' : 120,
        'end' : 164,
        'duration': 44,
        'content' : 'this is the content of the chunk',
        'speakers': [
            {
              'name': 'Nebojsa Nakicenovic',
              'id': 'speaker-nebojsa-nakicenovic'
            },
            {
              'name': 'Jan Zalasiewicz',
              'id': 'speaker-jan-zalasiewicz'
            },
            ...
          ],
        'themes':[
              {
                'name' : 'agriculture',
                'id':'theme-agriculture'
              },
              { 'name' : 'chemicals',
                'id': 'theme-chemicals'
              },
              ...
            ],
        'places': [
            {
              'name' : 'Rionero in Vulture',
              'id':'place-rionero-in-vulture'
            },
            {
              'name' : 'Ortona',
              'id': 'place-ortona'
            },
            ...
          ]
        },
      ...
    ]
}
```

Notes on data :
* 'value' attribute corresponds to the total number of occurence of an entity
* chunk's 'id' is the slugified title of its origin video + '-' + the (ordinal) position of the chunk in its original video
* tag's 'id' attribute is a slug build with : entity's type + '-' + slugified name
* 'videoId' is built with the slugified title of the video

####Entities network

Returns json data about the network of one or more entities

######HTTP REQUEST

`GET http://www.dictosite.org/api/network`

######QUERY PARAMETERS

|Parameter|Type|Example|Description|
|---|---|---|---|
|nodes|Array|[20, 12,34]|List of entities id in the network |


######SUCCESS RESPONSE:

```
{
  'nodes':
    [
      {
        'id' : 4,
        'name' : 'agriculture',
        'value' : 20,
        'category' : 'theme'
      },
      {
        'id' : 20,
        'name' : 'chemicals',
        'value' : 2,
        'category' : 'theme'
      },
      ...
    ],
  'links':
    [
      {
        'source' : 4,
        'target' : 20,
        'value' : 2
      },
      ...
    ]
}
```

Notes on data's nodes :
* 'value' attribute corresponds to the total number of occurence of an entity
* entity's 'id' attribute corresponds to the order of the tag in nodes' array (not the same as other endpoints)
* entity's category is the category of entity (theme || speaker || place)

Notes on data's links :
* 'value' attribute is calculated by counting co-occurences of entities within the same chunk

####Single chunk

Returns json data with the info of the chunk

######HTTP REQUEST

`GET http://www.dictosite.org/api/chunks/:id`

######SUCCESS RESPONSE:

```
{
  'id' : 'an-amazing-story-15',

  'videoTitle': 'an amazing story',
  'videoId' : 'an-amazing-story',
  'videoSubtitles': 'path/to/an-amazing-story.json',

  'start' : 120,
  'end' : 164,
  'duration': 44,

  'content' : 'Here is the content of the chunk',
  'speakers': [
      {
        'name': 'Nebojsa Nakicenovic',
        'id': 'speaker-nebojsa-nakicenovic'
      },
      {
        'name': 'Jan Zalasiewicz',
        'id': 'speaker-jan-zalasiewicz'
      },
      ...
    ],
  'themes':[
        {
          'name' : 'agriculture',
          'id':'theme-agriculture'
        },
        { 'name' : 'chemicals',
          'id': 'theme-chemicals'
        },
        ...
      ],
  'places': [
      {
        'name' : 'Rionero in Vulture',
        'id':'place-rionero-in-vulture'
      },
      {
        'name' : 'Ortona',
        'id': 'place-ortona'
      },
      ...
    ]
}
```

Notes on data :
* 'value' attribute corresponds to the total number of occurence of an entity
* tag's 'id' attribute is a slug build with : entity's type + '-' + slugified name
* 'videoId' is built with the slugified title of the video

####List videos

Returns json data with the info of all videos

######HTTP REQUEST

`GET http://www.dictosite.org/api/videos/:id`

######SUCCESS RESPONSE:

```
[
  {

    'videoId' : 'an-amazing-story',
    'videoTitle': 'an amazing story',
    'videoSubtitles': 'path/to/an-amazing-story.json'

    'duration': 560,
    'speakers': [
        {
          'name': 'Nebojsa Nakicenovic',
          'id': 'speaker-nebojsa-nakicenovic'
        },
        {
          'name': 'Jan Zalasiewicz',
          'id': 'speaker-jan-zalasiewicz'
        },
        ...
      ],
    'themes':[
          {
            'name' : 'agriculture',
            'id':'theme-agriculture'
          },
          { 'name' : 'chemicals',
            'id': 'theme-chemicals'
          },
          ...
        ],
    'places': [
        {
          'name' : 'Rionero in Vulture',
          'id':'place-rionero-in-vulture'
        },
        {
          'name' : 'Ortona',
          'id': 'place-ortona'
        },
        ...
      ]
    }
  },
  ...
]
```

####Single video

Returns json data with the info of the video

######HTTP REQUEST

`GET http://www.dictosite.org/api/videos/:id`

######SUCCESS RESPONSE:

```
{

  'videoId' : 'an-amazing-story',
  'videoTitle': 'an amazing story',
  'videoSubtitles': 'path/to/an-amazing-story.json'

  'duration': 560,
  'speakers': [
      {
        'name': 'Nebojsa Nakicenovic',
        'id': 'speaker-nebojsa-nakicenovic'
      },
      {
        'name': 'Jan Zalasiewicz',
        'id': 'speaker-jan-zalasiewicz'
      },
      ...
    ],
  'themes':[
        {
          'name' : 'agriculture',
          'id':'theme-agriculture'
        },
        { 'name' : 'chemicals',
          'id': 'theme-chemicals'
        },
        ...
      ],
  'places': [
      {
        'name' : 'Rionero in Vulture',
        'id':'place-rionero-in-vulture'
      },
      {
        'name' : 'Ortona',
        'id': 'place-ortona'
      },
      ...
    ]
  }
```


#### List Playlists

Returns list of playlists represented by their metadata

######HTTP REQUEST

`GET http://www.dictosite.org/api/playlists`

######SUCCESS RESPONSE:

```
[
  {
    'id': 'about-agriculture',
    'title' : 'About agriculture',
    'speakers': [
        {
          'name': 'Nebojsa Nakicenovic',
          'id': 'speaker-nebojsa-nakicenovic'
        },
        {
          'name': 'Jan Zalasiewicz',
          'id': 'speaker-jan-zalasiewicz'
        },
        ...
      ],
    'themes':[
          {
            'name' : 'agriculture',
            'id':'theme-agriculture'
          },
          { 'name' : 'chemicals',
            'id': 'theme-chemicals'
          },
          ...
        ],
    'places': [
        {
          'name' : 'Rionero in Vulture',
          'id':'place-rionero-in-vulture'
        },
        {
          'name' : 'Ortona',
          'id': 'place-ortona'
        },
        ...
      ]
  },
  ...
]
```

#### Single playlist

Returns metadata and chunks of a given playlist

######HTTP REQUEST

`GET http://www.dictosite.org/api/playlists/:id`

######SUCCESS RESPONSE:

```
{
  'id': 'about-agriculture',
  'title' : 'About agriculture',
  'chunks':[
      {
        'id' : 'an-amazing-story-15',

        'videoTitle': 'an amazing story',
        'videoId' : 'an-amazing-story',
        'videoSubtitles': 'path/to/subtitles.json',

        'start' : 120,
        'end' : 164,
        'duration': 44,

        'content' : 'Here is the content of the chunk',
        'speakers': [
            {
              'name': 'Nebojsa Nakicenovic',
              'id': 'speaker-nebojsa-nakicenovic'
            },
            {
              'name': 'Jan Zalasiewicz',
              'id': 'speaker-jan-zalasiewicz'
            },
            ...
          ],
        'themes':[
              {
                'name' : 'agriculture',
                'id':'theme-agriculture'
              },
              { 'name' : 'chemicals',
                'id': 'theme-chemicals'
              },
              ...
            ],
        'places': [
            {
              'name' : 'Rionero in Vulture',
              'id':'place-rionero-in-vulture'
            },
            {
              'name' : 'Ortona',
              'id': 'place-ortona'
            },
            ...
          ]
        }
      },
      ....
  ]
}
```
