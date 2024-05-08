# CSS GRID

- Flexbox is one dimensional
- Grid is two dimensional

## grid-template-columns:

- Defines the columns and rows of the grid with a space-separated list of values.

## grid-template-rows:

- We can also specify height of each row by using
  `grid-template-rows` property

- to get gap between each item, we can use
  `grid-row-gap`
- same goes for `grid-column-gap`

## repeat():

- The
  repeat()
  CSS
  function represents a repeated fragment of the track list,
  allowing a large number of columns or rows that exhibit a recurring pattern to be
  written in a more compact form.

## Syntax :

repeat(no_of_times,size)

- for eg:
  grid-template-columns: 100px 100px can be written as
  `repeat(2,100px)`

