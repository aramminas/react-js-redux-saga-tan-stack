import { useState } from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import LinkWrapper from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import TotalPrice from "@/components/basic/TotalPrice";
import ProductMeta from "@/components/favoriteProducts/ProductMeta";
import ProductTags from "@/components/favoriteProducts/ProductTags";
import ProductImages from "@/components/favoriteProducts/ProductImages";
import { FavoriteProductItemProps } from "@/components/favoriteProducts/types";
import ProductDimensions from "@/components/favoriteProducts/ProductDimensions";
import { avatarName, dateFormat, searchUrl, availabilityStatusColor } from "@/helpers";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function FavoriteProductItem({
  product: {
    title,
    description,
    category,
    price,
    rating,
    tags,
    brand,
    weight,
    dimensions,
    availabilityStatus,
    meta,
    images,
    thumbnail,
    _id,
  },
  handleRemove,
}: FavoriteProductItemProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={dateFormat(meta.createdAt)}
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{avatarName(brand, title)}</Avatar>}
      />
      <CardMedia component="img" height="194" image={thumbnail} alt={title} />
      <CardContent>
        {brand && (
          <Typography gutterBottom variant="h5" component="div">
            {brand}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleRemove(_id)}
          aria-label="remove from favorites"
          sx={{ "&:hover": { color: "red" } }}
        >
          <DeleteIcon />
        </IconButton>
        <LinkWrapper target="_blank" size="small" href={searchUrl(title)}>
          <IconButton aria-label="share" sx={{ "&:hover": { color: "blue" } }}>
            <ShareIcon />
          </IconButton>
        </LinkWrapper>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Typography variant="span" sx={{ fontWeight: 600 }}>
              Category:
            </Typography>
            <Typography variant="span" color="text.secondary">
              {" "}
              {category}
            </Typography>
          </Typography>
          <TotalPrice price={price} rating={rating} />
          <Divider sx={{ marginBottom: 2 }} />
          <Typography paragraph>
            <Typography variant="span" sx={{ fontWeight: 600 }}>
              Availability status:
            </Typography>
            <Typography variant="span" color={availabilityStatusColor(availabilityStatus)}>
              {" "}
              {availabilityStatus}
            </Typography>
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {dimensions && <ProductDimensions dimensions={dimensions} weight={weight} />}
          <Divider sx={{ marginBottom: 2 }} />
          {meta && <ProductMeta meta={meta} />}
          <Divider sx={{ marginBottom: 2 }} />
          {images?.length > 0 && <ProductImages images={images} />}
          <Divider sx={{ marginBottom: 2 }} />
          {tags?.length && <ProductTags tags={tags} />}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default FavoriteProductItem;
