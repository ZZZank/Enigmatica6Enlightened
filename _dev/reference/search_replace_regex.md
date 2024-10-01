
##require
```re
^const\s?\{\s*(\S+)\s*\}\s*=\s*require\s?\((\S+)\)
```
->
```
let $1 = java($2)
```


## item
```re
\{ item: '(.+)', count: ([0-9]+) \}
```
->
```
'$2x $1'
or toJsonWithCount('$2x $1')
```

## tag
```re
\{ tag: '(.+)', count: ([0-9]+) \}
```
->
```
'$2x #$1'
or toJsonWithCount('$2x #$1')
```

## trim number
```re
'1x (.+)'
```
->
```
'$1'
```

## masterfulmachinery
```re
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
```re
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
