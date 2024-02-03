
## item
```
\{ item: '(.+)', count: ([0-9]+) \}
```
->
```
'$2x $1'
or toJsonWithCount('$2x $1')
```

## tag
```
\{ tag: '(.+)', count: ([0-9]+) \}
```
->
```
'$2x #$1'
or toJsonWithCount('$2x #$1')
```

## trim number
```
'1x (.+)'
```
->
```
'$1'
```

## masterfulmachinery
```
(\s+)\{
\s+type: 'masterfulmachinery:items',
\s+data: (.+)
\s+\},
```
->
```
$1$2,
```

## event
```js
captureEvent\("(.+)", \(event\) => \{ (.+) \}\)

captureEvent("$1", (event) => {
    if (!serverSet.has("$1")) {
        serverSet.add("$1")
        console.info("$1")
    }
})

["(.+)"]
```

## quest
```
(\t+)type: "command"
\s+title: ".+"
\s+icon: "(.+)"
\s+command: "/execute at @p run loot spawn ~ ~1 ~ loot enigmatica:chests/quest_(.+)_.+"
\s+player_command: false
```
->
```
$1type: "item"
$1item: {
    $1id: "$2"
	$1Count: 1b
	$1tag: {
        $1mod: "$3"
	$1}
$1}
```
