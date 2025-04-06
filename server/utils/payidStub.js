exports.triggerPayOut = async (sellerId, amount) => {
    console.log(`💸 Simulated PayID payout: $${amount} → Seller ${sellerId}`);
    return true;
  };
  