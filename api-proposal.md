#Armin Linke Anthropocene API PROPOSAL

####Entities list

Returns json data about all entities in our corpus

######HTTP REQUEST

`GET http://www.dictosite.org/api/entities`

######SUCCESS RESPONSE:

```
{
  'tags':
    [
      { 'name' : 'agriculture', 'value' : 20, id:20 },
      { 'name' : 'chemicals', 'value' : 8, id:3 },
      ...
    ],
  'speakers':
    [
      { 'name' : 'Gabibbo', 'value' : 20, id:3 },
      { 'name' : 'Fantozzi', 'value' : 2, id:39},
      ...
    ],
  'places':
    [
      { 'name' : 'Rionero in Vulture', 'value' : 2, id:33 },
      { 'name' : 'Ortona', 'value' : 20, id:9 },
      ...
    ]
}
```

####Single entity

Returns json data about all video chunks containing the entity

######HTTP REQUEST

`GET http://www.dictosite.org/api/entities/:id`

######SUCCESS RESPONSE:

```
{
  'name':'agriculture',
  'id':20,
  'chunks':
    [
      { 'id' : 4,
        'file' : 'path/to/file.mp4',
        'thumb': 'path/to/thumb.jpg'
        'start':20,
        'end' : 32,
        'duration': 12,
        'title': 'an incredible story',
        'date': '2015/05/23',
        'meta':{
            'speaker': 'Jan Zalasiewicz',
            'tags':[
                'one',
                'agriculture',
                'two'
              ],
            'places': 'Milano, Italy'
          }
        },
      { 'id' : 15,
        'file' : 'path/to/file.mp4',
        'thumb': 'path/to/thumb.jpg'
        'start' : 120,
        'end' : 164,
        'duration': 44,
        'title': 'an amazing story',
        'date': '2013/06/12',
        'meta':{
            'speaker': 'Nebojsa Nakicenovic',
            'tags':[
                'one',
                'agriculture'
              ],
            'places': 'Asiago, Italy'
          }
        },
      ...
    ]
}
```

####Entities network

Returns json data about the network of one or more entities

######HTTP REQUEST

`GET http://www.dictosite.org/api/network`

######QUERY PARAMETERS

|Parameter|Type|Example|Description|
|---|---|---|---|
|nodes|Array|[20, 12,34]|List of entities id in the network


######SUCCESS RESPONSE:

```
{
  'nodes':
    [
      {
        'id' : 4,
        'name' : 'agriculture',
        'value' : 20
      },
      {
        'id' : 20,
        'name' : 'chemicals',
        'value' : 2
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

####Single chunk

Returns json data with the info of the chunk

######HTTP REQUEST

`GET http://www.dictosite.org/api/chunks/:id`

######SUCCESS RESPONSE:

```
{
  'id' : 15,
  'file' : 'path/to/file.mp4',
  'thumb': 'path/to/thumb.jpg'
  'subtitles': 'path/to/subtitles.json'
  'start' : 120,
  'end' : 164,
  'duration': 44,
  'title': 'an amazing story',
  'date': '2013/06/12',
  'meta':{
      'speaker': 'Nebojsa Nakicenovic',
      'tags':[
          'one',
          'agriculture'
        ],
      'places': 'Asiago, Italy'
    }
  }
```

####Single video

Returns json data with the info of the video

######HTTP REQUEST

`GET http://www.dictosite.org/api/videos/:id`

######SUCCESS RESPONSE:

```
{
  'id' : 15,
  'file' : 'path/to/file.mp4',
  'thumb': 'path/to/thumb.jpg'
  'subtitles': 'path/to/subtitles.json'
  'duration': 560,
  'title': 'an amazing story',
  'date': '2013/06/12',
  'speakers': [
      {
        'name': 'Nebojsa Nakicenovic',
        'id': 43
      },
      {
        'name': 'Jan Zalasiewicz',
        'id': 2
      },
      ...
    ],
  'tags':[
        {
          'name' : 'agriculture',
          'id':20
        },
        { 'name' : 'chemicals',
          'id':3
        },
        ...
      ],
  'places': [
      {
        'name' : 'Rionero in Vulture',
        'id':33
      },
      {
        'name' : 'Ortona',
        'id': 9
      },
      ...
    ]
  }
```

####Random playlist

Returns json data with the chunks of a playlist

######HTTP REQUEST

`GET http://www.dictosite.org/api/random`

######SUCCESS RESPONSE:

```
{
  'playlist':[
    {
      'id' : 15,
      'file' : 'path/to/file.mp4',
      'thumb': 'path/to/thumb.jpg'
      'subtitles': 'path/to/subtitles.json'
      'start' : 120,
      'end' : 164,
      'duration': 44,
      'title': 'an amazing story',
      'date': '2013/06/12',
      'meta':{
          'speaker': 'Nebojsa Nakicenovic',
          'tags':[
              'one',
              'agriculture'
            ],
          'places': 'Asiago, Italy'
        }
      },
      ....
  ]
}
```
