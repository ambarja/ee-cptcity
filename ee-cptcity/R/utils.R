library(tidyverse)
library(rjson)

path <- "../resources/top-palettes/"
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
  hexcolor   <- rgb(color[["r"]], color[["g"]], color[["b"]])
  finalcolor <- colorRampPalette(hexcolor)(6)
  return(finalcolor)
}

data_hex <- lapply(X = data_rgb, FUN = rgb_to_hex)
# test <- data_hex$mpl_viridis
# image(matrix(1:100),col = test)
export_cptcity <- toJSON(data_hex)
write(export_cptcity, "ee-cptcity2.js")