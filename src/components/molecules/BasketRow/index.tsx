import { DeleteIcon } from "@chakra-ui/icons";
import { Box, GridItem, Grid, IconButton } from "@chakra-ui/react";
import { useMemo } from "react";
import { useBasketContext } from "../../../contexts/basketContext";
import { calculateDiscount } from "../../../helpers/calculateDiscount";
import { calculatePrice } from "../../../helpers/calculatePrice";
import { formatPrice } from "../../../helpers/formatPrice";
import { BasketItem } from "../../../mockData/getMockBasketResponse";

export const BasketRow: React.FC<BasketItem> = (basketItem) => {
  const { removeFromBasket } = useBasketContext();
  const {
    qty,
    sku,
    productDetails: { name, price },
  } = basketItem;

  const totalPrice = useMemo(() => {
    return calculatePrice(basketItem, {
      withOfferPriceApplied: false,
    });
  }, [qty]);

  const discount = useMemo(() => {
    return calculateDiscount(basketItem);
  }, [qty]);

  return (
    <Box
      border={"1px solid"}
      borderRadius="4"
      borderColor="gray.300"
      padding={"4"}
      my={"4"}
      key={sku}
      data-testid={`basket-row-${sku}`}
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem>
          <Box>Qty:</Box>
          {qty}
        </GridItem>
        <GridItem>
          <Box>Name:</Box>
          {name}{" "}
        </GridItem>
        <GridItem>
          <Box>Unit Price:</Box>
          {formatPrice(price)}
        </GridItem>
        <GridItem>
          <Box>Total Price:</Box>
          <Box data-testid={`product-price-${sku}`}>
            {formatPrice(totalPrice)}
          </Box>
          {discount > 0 && (
            <Box>
              (-
              <span data-testid={`product-discount-${sku}`}>
                {formatPrice(discount)}
              </span>
              )
            </Box>
          )}
        </GridItem>
        <GridItem textAlign={"right"}>
          <IconButton
            title={`Remove ${name} from basket`}
            data-testid={`remove-basket-row-${sku}`}
            aria-label="remove from basket"
            onClick={() => removeFromBasket(sku)}
            icon={<DeleteIcon />}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
