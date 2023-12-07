
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
'$2x $1'
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