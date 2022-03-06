library(tidyverse)
library(rjson)

path <- "basedata/"
list.csv <- list.files(
  path = path,
  pattern = ".csv$",
  recursive = TRUE
) %>%
  sprintf("%s%s",path,.)

name_color <- list.csv %>%
  gsub(".csv", "", .) %>%
  gsub("basedata/newcolors/", "", .)

data_rgb <- lapply(list.csv,read_csv)
names(data_rgb) <- name_color

rgb_to_hex <- function(color) {
  hexcolor <- rgb(color[["R"]], color[["G"]], color[["B"]])
  return(hexcolor)
}

data_hex <- lapply(X = data_rgb, FUN = rgb_to_hex)
export_cptcity <- toJSON(data_hex)
write(export_cptcity, "ee-newcolors.json")
