library(tidyverse)
library(rjson)

path <- "basedata/"
list.gpf <- list.files(
  path = path,
  pattern = ".gpf$",
  recursive = TRUE
)

name_color <- list.gpf %>%
  gsub(".gpf", "", .) %>%
  gsub("-", "_", .) %>%
  gsub("/", "_", .)  %>%
  gsub("top_palletes_", "", .)

new_color <- function(x) {
  data <- read_table(sprintf("%s%s", path, x))
  names(data) <- c("id", "r", "g", "b")
  newcolor <- data %>%
    filter(id != "#") %>%
    mutate_if(is.character, as.double) %>%
    as.data.frame()
}

data_rgb <- lapply(list.gpf, new_color)
names(data_rgb) <- name_color

rgb_to_hex <- function(color) {
  hexcolor <- rgb(color[["r"]], color[["g"]], color[["b"]])
  return(hexcolor)
}

data_hex <- lapply(X = data_rgb, FUN = rgb_to_hex)
export_cptcity <- toJSON(data_hex)
write(export_cptcity, "ee-cptcity.js")
