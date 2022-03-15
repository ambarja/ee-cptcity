library(tidyverse)
library(rjson)

path <- "../resources/others/csv/"
list.csv <- list.files(
  path = path,
  pattern = ".csv$",
  recursive = TRUE
) %>%
  sprintf("%s%s",path,.)

name_color <- list.csv %>%
  gsub(".csv", "", .) %>%
  gsub("resources/others/","",.) %>% 
  gsub("../","",.)

data_rgb <- lapply(list.csv,read_csv)
names(data_rgb) <- name_color

rgb_to_hex <- function(color) {
  hexcolor <- rgb(color[["R"]], color[["G"]], color[["B"]])
  finalcolor <- colorRampPalette(hexcolor)(6)
  return(finalcolor)
}

data_hex <- lapply(X = data_rgb, FUN = rgb_to_hex)
# test <- data_hex$mako
# image(matrix(1:100),col = test)
export_cptcity <- toJSON(data_hex)
write(export_cptcity, "ee-newcolors.json")