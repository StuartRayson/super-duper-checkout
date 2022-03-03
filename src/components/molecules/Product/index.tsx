import {
  Button,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Divider,
  Image,
  Box,
  Tag,
} from "@chakra-ui/react";
import { useBasketContext } from "../../../contexts/basketContext";
import { ProductType } from "../../../mockData/getMockProductListResponse";

export const Product: React.FC<ProductType> = (product) => {
  const { addToBasket } = useBasketContext();
  const { sku, productDetails } = product;
  const { price, name, description, productImg, offer } = productDetails;
  return (
    <Box
      data-testid="product"
      position="relative"
      border={"1px solid"}
      borderRadius="4"
      borderColor="gray.300"
      overflow="hidden"
    >
      <Image
        boxSize="100%"
        objectFit="cover"
        src={productImg}
        alt={`imageAlt`}
      />

      {offer && (
        <Tag colorScheme="blue" position="absolute" top="4" right="4">
          {offer.type}
        </Tag>
      )}

      <Box padding="4">
        <Stat>
          <StatLabel>{name}</StatLabel>
          <StatNumber>{price}</StatNumber>
          <StatHelpText>sku: {sku}</StatHelpText>
          <Divider />
          <StatHelpText>{description}</StatHelpText>
        </Stat>

        <Button
          colorScheme="teal"
          size="md"
          data-testid={`add-to-basket-${sku}`}
          onClick={() => addToBasket(product)}
        >
          Add to Basket
        </Button>
      </Box>
    </Box>
  );
};
